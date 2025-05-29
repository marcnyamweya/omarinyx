import { SortBy } from '@/src/components/system/Files/FileManager/useSortBy';
import { type Position } from 'react-rnd';
import { ThemeName } from '@/styles/theme';

declare global {
  interface Window {
    sessionWritable: boolean;
  }
}

export type UpdateFiles = (newFile?: string, oldFile?: string) => Promise<void>;

export type WindowState = {
  position: Position;
  size?: Size;
};

export type WindowStates = Record<string, WindowState>;

export type WallPaperFit = 'center' | 'fill' | 'fit' | 'stretch' | 'tile';

type SortOrder = [string[], sortBy?, boolean?];

export type SortOrders = Record<string, SortOrder>;

export type Views = Record<string, FileManagerViewNames>;

export type ClockSource = 'system' | 'local' | 'network';

export type RecentFiles = [string, string, string][];

export type IconPositions = {
    gridColumnStart: number;
    gridRowStart: number;
};

export type SessionData = {
  aiEnabled: boolean;
  clockSource: ClockSource;
  cursor: string | undefined;
  IconPositions: IconPositions;
  lazySheep?: boolean;
  recentFiles: RecentFiles;
  runHistory: string[];
  sortOrders: SortOrders;
  themeName: ThemeName;
  views: Views;
  wallPaperFit: WallPaperFit;
  wallpaperImage: string;
  windowStates: WindowStates;
};

export type SessionContextState = SessionData & {
    foregroundId: string;
    prependToStack: (id: string) => void;
    removeFromStack: (id: string) => void;
    sessionLoaded: boolean;
    setAiEnabled: React.Dispatch<React.SetStateAction<boolean>>;
    setClockSource: React.Dispatch<React.SetStateAction<ClockSource>>;
    setCursor: React.Dispatch<React.SetStateAction<string | undefined>>;
    setForegroundId: React.Dispatch<React.SetStateAction<string>>;
    setHaltSession: React.Dispatch<React.SetStateAction<boolean>>;
    setIconPositions: React.Dispatch<React.SetStateAction<IconPositions>>;
    setRunHistory: React.Dispatch<React.SetStateAction<string[]>>;
    setSortOrder: (
        directory: string,
        order: string[] | ((currentSortOrder: string[]) => string[]),
        sortBy?: SortBy,
        ascending?: boolean
    ) => void;
    setThemeName: React.Dispatch<React.SetStateAction<ThemeName>>;
    setViews: React.Dispatch<React.SetStateAction<Views>>;
    setWindowStates: React.Dispatch<React.SetStateAction<WindowStates>>;
    stackOrder: string[];
    updateRecentFiles: (url: string, pid: string, title?: string) => void;
};