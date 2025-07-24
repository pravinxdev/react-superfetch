"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
  setGlobalErrorHandler: () => setGlobalErrorHandler
});
module.exports = __toCommonJS(src_exports);
var globalErrorHandler = null;
var setGlobalErrorHandler = (handler) => {
  globalErrorHandler = handler;
};
var requestQueue = [];
var isOnline = () => typeof navigator !== "undefined" ? navigator.onLine : true;
var log = {
  info: (msg) => console.log(`\x1B[34m[INFO]\x1B[0m ${msg}`),
  success: (msg) => console.log(`\x1B[32m[SUCCESS]\x1B[0m ${msg}`),
  error: (msg) => console.error(`\x1B[31m[ERROR]\x1B[0m ${msg}`)
};
var refreshToken = async () => {
  console.log("\x1B[33m[REFRESH TOKEN]\x1B[0m Attempting to refresh token...");
  return null;
};
var callApi = async (url, options = {}) => {
  const {
    method = "GET",
    payload,
    token,
    headers = {},
    onSuccess,
    onError,
    showLoading = false,
    successMessage,
    errorMessage,
    retryCount = 0,
    timeout = 1e4,
    autoRefreshToken = false
  } = options;
  const fetchOptions = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers
    }
  };
  if (token) {
    fetchOptions.headers = {
      ...fetchOptions.headers,
      Authorization: `Bearer ${token}`
    };
  }
  if (payload && method !== "GET") {
    fetchOptions.body = JSON.stringify(payload);
  }
  const performRequest = async (attempt = 0) => {
    if (showLoading)
      log.info("Loading...");
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      const response = await fetch(url, { ...fetchOptions, signal: controller.signal });
      clearTimeout(id);
      if (!response.ok) {
        if (response.status === 401 && autoRefreshToken) {
          const newToken = await refreshToken();
          if (newToken) {
            return callApi(url, {
              ...options,
              token: newToken,
              autoRefreshToken: false
            });
          }
        }
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const data = await response.json();
      if (successMessage)
        log.success(successMessage);
      onSuccess?.(data);
      return data;
    } catch (error) {
      if (!isOnline()) {
        log.error("You are offline. Queuing the request.");
        requestQueue.push(() => callApi(url, options));
        return;
      }
      if (attempt < retryCount) {
        log.info(`Retrying... Attempt ${attempt + 1}`);
        return performRequest(attempt + 1);
      }
      const errMsg = errorMessage || error.message || "Unknown error";
      log.error(errMsg);
      onError?.(errMsg);
      globalErrorHandler?.(error);
      throw error;
    }
  };
  return performRequest();
};
if (typeof window !== "undefined") {
  window.addEventListener("online", () => {
    log.info("Back online. Syncing queued requests...");
    const queued = [...requestQueue];
    requestQueue = [];
    queued.forEach((fn) => fn());
  });
}
var src_default = callApi;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  setGlobalErrorHandler
});
