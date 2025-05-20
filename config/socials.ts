import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@yurnero14",
    icon: Icons.gitHub,
    link: "https://github.com/yurnero14",
  },
  {
    name: "LinkedIn",
    username: "Muhammad Sarib Khan",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/msaribk",
  },
  {
    name: "Gmail",
    username: "msaribkhan126",
    icon: Icons.gmail,
    link: "mailto:msaribkhan126@gmail.com",
  },
];
