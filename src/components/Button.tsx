export const Button = ({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) => (
    <button className="button uppercase border border-red-500 rounded-md px-3 text-xs lg:text-sm flex gap-2 items-center py-2 w-1/2">
      {icon}
      <div className="flex justify-center flex-grow">
        {children}
      </div>
    </button>
)