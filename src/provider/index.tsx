import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import i18next from "@/lib/i18n";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/query-client";
import { persistor, store } from "../redux/store";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18next}>
              <BrowserRouter>{children}</BrowserRouter>
            </I18nextProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  );
};
