function isBrowser() {
  if (typeof document === "undefined") {
    // running in a server environment
    return false;
  }

  // running in a browser environment
  return true;
}

export default isBrowser;
