"use client";

import { useMemo } from "react";

export default function useDashboard() {
  return useMemo(
    () => ({
      production: 24580,
      orders: 381,
      inventory: 8420,
      defectRate: 1.8,
    }),
    []
  );
}