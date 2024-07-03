export const Step = ({ name,  children }: { name: string, children: React.ReactNode }) => (
  <div className="item">
    <div className="step uppercase text-xs">{name}</div>
    <div className="time">{children}</div>
  </div>
)