import {
  BriefcaseIcon,
  ShieldIcon,
  GlobeIcon,
  ServerIcon,
  TerminalIcon,
  LayersIcon,
  LockIcon,
  KeyIcon,
  BellIcon,
  AlertCircleIcon,
  DatabaseIcon,
  CodeIcon,
  FileTextIcon,
} from "lucide-react";
const iconClasses = "text-sm pointer-events-none flex-shrink-0";
export const icons = [
  { key: "Briefcase", component: <BriefcaseIcon className={iconClasses} /> },
  { key: "Shield", component: <ShieldIcon className={iconClasses} /> },
  { key: "Globe", component: <GlobeIcon className={iconClasses} /> },
  { key: "Server", component: <ServerIcon className={iconClasses} /> },
  { key: "Terminal", component: <TerminalIcon className={iconClasses} /> },
  { key: "Layers", component: <LayersIcon className={iconClasses} /> },
  { key: "Lock", component: <LockIcon className={iconClasses} /> },
  { key: "Key", component: <KeyIcon className={iconClasses} /> },
  { key: "Bell", component: <BellIcon className={iconClasses} /> },
  { key: "Alert Circle", component: <AlertCircleIcon className={iconClasses} /> },
  { key: "Database", component: <DatabaseIcon className={iconClasses} /> },
  { key: "Code", component: <CodeIcon className={iconClasses} /> },
  { key: "File Text", component: <FileTextIcon className={iconClasses} /> },
];
