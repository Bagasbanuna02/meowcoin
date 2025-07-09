/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, memo } from "react";

interface TradingViewWidgetProps {
  symbol?: string;
  theme?: "light" | "dark";
  height?: number;
  interval?: string;
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({
  symbol = "CRYPTOCAP:SOL",
  theme = "dark",
  height = 700,
  interval = "15",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Bersihkan container sebelumnya
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    // Hanya jalankan di browser
    if (typeof window === "undefined") return;

    // Buat script element
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    // Konfigurasi widget
    const widgetConfig = {
      autosize: true,
      symbol: symbol,
      interval: interval,
      timezone: "Etc/UTC",
      theme: theme,
      style: "1",
      locale: "en",
      backgroundColor: theme === "dark" ? "#0F0F0F" : "#FFFFFF",
      gridColor:
        theme === "dark" ? "rgba(242, 242, 242, 0.06)" : "rgba(0, 0, 0, 0.06)",
      allow_symbol_change: true,
      calendar: false,
      details: false,
      hide_side_toolbar: true,
      hide_top_toolbar: false,
      hide_legend: false,
      hide_volume: false,
      hotlist: false,
      save_image: true,
      withdateranges: false,
      watchlist: [],
      compareSymbols: [],
      studies: [],
    };

    // Set konfigurasi sebagai text content
    script.text = JSON.stringify(widgetConfig);

    // Tambahkan event listeners
    script.onload = () => {
      console.log("TradingView widget loaded");
    };

    script.onerror = (error) => {
      console.error("TradingView widget error:", error);
    };

    // Tambahkan script ke container
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [symbol, theme, interval]);

  return (
    <div
      id="chart"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "20px",
        marginTop: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    >
      <div style={{ width: "100%", height: `${height}px`, margin: "auto" }}>
        <div
          ref={containerRef}
          className="tradingview-widget-container"
          style={{
            height: "100%",
            width: "100%",
            position: "relative",
            backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
          }}
        >
          <div
            className="tradingview-widget-container__widget"
            style={{
              height: "calc(100% - 32px)",
              width: "100%",
            }}
          />
          <div
            className="tradingview-widget-copyright"
            style={{
              fontSize: "12px",
              textAlign: "center",
              padding: "8px",
              color: theme === "dark" ? "#888" : "#666",
            }}
          >
            <a
              href="https://www.tradingview.com/"
              rel="noopener nofollow"
              target="_blank"
              style={{
                color: theme === "dark" ? "#2196F3" : "#1976D2",
                textDecoration: "none",
              }}
            >
              Track all markets on TradingView
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
