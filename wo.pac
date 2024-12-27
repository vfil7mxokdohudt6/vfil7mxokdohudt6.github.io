function FindProxyForURL(url, host)
{
  return "SOCKS5 127.0.0.1:20090; DIRECT";
}

// syntax info:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
