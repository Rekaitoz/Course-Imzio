import { Menu, UnstyledButton } from "@mantine/core";
import { IconUser, IconLogout, IconChevronDown } from "@tabler/icons-react";
import { useAuth } from "features/auth";

const UserMenu: React.FC = () => {
  const { creds, logout } = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <div>
      <Menu position="bottom-end" shadow="md" width={256}>
        <Menu.Target>
          <UnstyledButton className="inline-flex justify-center items-center bg-slate-600 text-white">
            <div className="flex items-center border border-white py-1.5 px-1.5 md:px-3 rounded-md space-x-3">
              <div className="rounded-full bg-slate-600 border flex items-center justify-center ">
                <IconUser size={20} stroke={1} className="" />
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-sm font-normal">
                  {creds?.username}Admin
                </div>
                <div className="border-l border-slate-400 pl-2 py-1">
                  <IconChevronDown size={15} />
                </div>
              </div>
            </div>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown className="px-0">
          <Menu.Item>
            <div className="flex items-center gap-x-2 hover:bg-gray-50 transition">
              <div className="w-9 h-9 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="text-sm">
                <div className="font-bold line-clamp-1 text-gray-800">
                  {creds?.username}
                </div>
                <div className="text-gray-600 font-medium line-clamp-1">
                  {creds?.username}
                </div>
              </div>
            </div>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item onClick={handleLogout}>
            <div className="flex items-center gap-x-2 hover:bg-gray-50 w-full transition text-sm text-gray-900">
              <IconLogout className="w-5 h-5" />
              <div className="font-semibold">Sign Out</div>
            </div>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default UserMenu;
