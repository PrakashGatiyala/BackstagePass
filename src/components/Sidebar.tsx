const days = [
  { label: "", locked: false, completed: false }, // Empty first block
  { label: "Day - 1", locked: false, completed: true },
  { label: "Day - 2", locked: true, completed: false },
  { label: "Day - 3", locked: true, completed: false },
  { label: "Day - 4", locked: true, completed: false },
  { label: "Day - 5", locked: true, completed: false },
  { label: "Day - 6", locked: true, completed: false },
  { label: "Day - 7", locked: true, completed: false },
  { label: "Day - 8", locked: true, completed: false },
  { label: "Day - 9", locked: true, completed: false },
];

export default function Sidebar() {
  return (
    <aside
      className="flex flex-col self-stretch"
      style={{
        width: "258px",
        minWidth: "258px",
        maxWidth: "258px",
        paddingTop: "16px",
        paddingBottom: "24px",
        paddingLeft: "8px",
        gap: "12px",
        background:
          "linear-gradient(180deg, rgba(48, 0, 64, 0.0627) 0%, rgba(48, 0, 64, 0.0627) 100%), linear-gradient(180deg, #FFFFFF 0%, #F7F6FC 100%)",
      }}
    >
      {/* Inner container */}
      <div
        className="flex flex-col"
        style={{
          width: "250px",
          height: "867px",
          gap: "12px",
          borderRadius: "16px",
        }}
      >
        {/* Inner layer */}
        <div
          className="flex flex-col"
          style={{
            width: "250px",
            height: "867px",
            gap: "12px",
            borderRadius: "24px",
          }}
        >
          {/* Day items */}
          {days.map((day, i) => (
            <div
              key={i}
              className="flex items-center"
              style={{
                width: "250px",
                height: "48px",
                paddingTop: "12px",
                paddingRight: "16px",
                paddingBottom: "12px",
                paddingLeft: "16px",
                gap: "24px",
                borderRadius: "16px",
                ...(day.completed
                  ? { backgroundColor: "var(--bg-card, #ffffff)" }
                  : {}),
              }}
            >
              <div
                className="flex items-center justify-between"
                style={{
                  width: "218px",
                  height: "24px",
                  gap: "8px",
                }}
              >
                <span
                  className="font-medium"
                  style={{
                    width: "190px",
                    height: "24px",
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "var(--text-primary)",
                  }}
                >
                  {day.label}
                </span>
                {day.completed && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="10" fill="#22c55e" />
                    <path
                      d="M6 10.5L8.5 13L14 7.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {day.locked && (
                  <img
                    src="/light/Page/LockSimple.svg"
                    alt="Locked"
                    style={{ width: "20px", height: "20px" }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
