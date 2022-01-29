import React from "react";
import Dashboard from "../components/console/dashboard";
import ConsoleLayout from "../components/layouts/consoleLayout";

export default function Console() {
  return (
    <ConsoleLayout>
      <Dashboard />
    </ConsoleLayout>
  );
}
