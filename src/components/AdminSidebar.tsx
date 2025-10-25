import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  FileText,
  BarChart3,
  MessageSquare,
  Languages,
  Gamepad2,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Tổng quan", url: "/admin", icon: LayoutDashboard },
  { title: "Thống kê", url: "/admin/statistics", icon: BarChart3 },
  { title: "Người dùng", url: "/admin/users", icon: Users },
  { title: "Từ vựng", url: "/admin/vocabulary", icon: BookOpen },
  { title: "Bài học", url: "/admin/lessons", icon: FileText },
  { title: "Trò chơi", url: "/admin/games", icon: Gamepad2 },
  { title: "Dịch thuật", url: "/admin/translation", icon: Languages },
  { title: "Phản hồi", url: "/admin/feedback", icon: MessageSquare },
  { title: "Cài đặt", url: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/admin") {
      return currentPath === path;
    }
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-3 px-4 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-2xl">🐼</span>
          </div>
          {open && (
            <div className="flex flex-col">
              <span className="text-lg font-bold">Panda-Chinese</span>
              <span className="text-xs text-muted-foreground">Quản trị viên</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu chính</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink to={item.url} end={item.url === "/admin"}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button className="w-full" onClick={() => window.location.href = "/"}>
                <LogOut className="h-4 w-4" />
                <span>Đăng xuất</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
