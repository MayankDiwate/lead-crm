"use client";

import { signOutAction } from "@/actions/authActions";
import { ToggleTheme } from "@/components/toggle-theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { LogOut, Mail, Menu, User as UserLogo } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { sidebarItems } from "./sidebar";

const Header = () => {
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const pathName = usePathname();
  const header = sidebarItems.find((item) => item.href === pathName);
  const headerName = header?.name;

  const getUser = async () => {
    const {
      data: { session },
    } = await createClient().auth.getSession();

    setCurrentUser(session?.user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex min-h-14 max-h-14 sticky top-0 overflow-hidden bg-white dark:bg-stone-950">
      <header className="flex w-full items-center justify-between border-b px-2 md:px-4">
        <Button variant="outline" size="icon" className="size-8 md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <div>{headerName}</div>
        <div className="flex items-center gap-4">
          <ToggleTheme />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative size-8 rounded-full">
                <Avatar className="size-8">
                  <AvatarImage
                    src={currentUser?.user_metadata?.avatar_url}
                    alt="@user-image"
                  />
                  <AvatarFallback>
                    <Button variant="ghost" size="icon">
                      <UserLogo className="size-4" />
                    </Button>
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              {currentUser ? (
                <>
                  {currentUser.user_metadata?.full_name && (
                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                      <UserLogo className="size-4" />
                      <span>{currentUser?.user_metadata?.full_name}</span>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                    <Mail className="size-4" />
                    <span>{currentUser?.email}</span>
                  </DropdownMenuItem>
                </>
              ) : (
                <div className="text-sm text-gray-500">No user logged in</div>
              )}
              <DropdownMenuItem
                className="flex items-center gap-2 cursor-pointer text-red-600 focus:text-red-600"
                onClick={() => signOutAction()}
              >
                <LogOut className="size-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
};

export default Header;
