import { FC, useState, MouseEvent } from "react";

type TabsProps = {
  children: React.ReactElement<TabProps>[];
};

type TabProps = {
  label: string;
  children: React.ReactNode;
};

const Tabs: FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (
    e: MouseEvent<HTMLButtonElement>,
    newActiveTab: string
  ) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="w-full mx-auto font-vazir">
      <div className="flex float-right space-x-5 w-2/5">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label
                ? "bg-secondary text-white transition duration-500"
                : "bg-main"
            } flex-1 text-gray-700 font-medium py-2 rounded-t-lg text-sm`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};
const Tab: FC<TabProps> = ({ label, children }) => {
  return (
    <div aria-label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };
