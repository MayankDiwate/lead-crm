"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === "dark" ? (
        <Button
          onClick={() => setTheme("light")}
          className="size-8 p-0"
          variant="outline"
        >
          <Moon key="dark" className="size-4   text-muted-foreground" />
        </Button>
      ) : (
        <Button
          onClick={() => setTheme("dark")}
          className="size-8 p-0"
          variant="outline"
        >
          <Sun key="light" className="size-4   text-muted-foreground" />
        </Button>
      )}
    </>
  );
}
