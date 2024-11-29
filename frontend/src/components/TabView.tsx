import { Code2, Eye } from 'lucide-react';

interface TabViewProps {
  activeTab: 'code' | 'preview';
  onTabChange: (tab: 'code' | 'preview') => void;
}

export function TabView({ activeTab, onTabChange }: TabViewProps) {
  return (
    <div className="flex space-x-2 mb-4">
      <button
        onClick={() => onTabChange('code')}
        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
          activeTab === 'code'
            ? 'bg-neutral-700 text-neutral-100'
            : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
        }`}
      >
        <Code2 className="w-4 h-4" />
        Code
      </button>
      <button
        onClick={() => onTabChange('preview')}
        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
          activeTab === 'preview'
            ? 'bg-neutral-700 text-neutral-100'
            : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
        }`}
      >
        <Eye className="w-4 h-4" />
        Preview
      </button>
    </div>
  );
}