"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";

const NotFound = () => {
  const handleGoToDashboard = () => {
    redirect("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-8">
        {/* Using a placeholder image since we can't access external images */}
        <Image
          src="/404.svg"
          width={450}
          height={450}
          alt="404 Not Found"
          className="mx-auto mb-8 dark:opacity-90"
        />

        <p className="text-foreground max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. Please check the
          URL or head back to the dashboard.
        </p>

        <Button
          onClick={handleGoToDashboard}
          variant="default"
          className="mt-4"
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
