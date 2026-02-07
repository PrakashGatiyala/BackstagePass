import { getImagePath } from '../utils/imageUtils';

export default function Header() {
  return (
    <header
      className="flex items-center justify-between border-b"
      style={{
        height: "60px",
        paddingTop: "14px",
        paddingBottom: "14px",
        paddingLeft: "24px",
        paddingRight: "24px",
        backgroundColor: "var(--bg-header)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* Left: Logo — w:201.67 h:24 gap:9.6 */}
      <div
        className="flex items-center"
        style={{ height: "24px", gap: "9.6px" }}
      >
        <img
          src={getImagePath('/light/Header/logo.png')}
          alt="BackstagePass logo icon"
          style={{ height: "24px", width: "auto" }}
        />
        <span
          className="font-bold leading-none"
          style={{
            fontFamily: "'Sarabun', sans-serif",
            fontSize: "24px",
            letterSpacing: "0px",
            lineHeight: "100%",
          }}
        >
          <span style={{ color: "var(--text-primary)" }}>Backstage</span>
          <span style={{ color: "#8D6500" }}>Pass</span>
        </span>
      </div>

      {/* Right: Actions — w:154 h:32 gap:12 */}
      <div
        className="flex items-center"
        style={{ height: "32px", gap: "12px" }}
      >
        {/* 🔥 30 Streak — w:66 h:32 gap:4 radius:full p:4px 8px */}
        <div
          className="flex items-center rounded-full"
          style={{
            height: "32px",
            gap: "4px",
            padding: "4px 8px",
            backgroundColor: "var(--bg-reaction-pill)",
          }}
        >
          <img
            src={getImagePath('/light/Header/streak.png')}
            alt="Streak"
            style={{ width: "auto", height: "18px" }}
          />
          <span
            className="font-semibold text-sm leading-none"
            style={{ color: "var(--text-primary)" }}
          >
            30
          </span>
        </div>

        {/* Notification Bell */}
        <img
          src={getImagePath('/light/Header/notification.png')}
          alt="Notifications"
          style={{ height: "32px", width: "auto" }}
          className="cursor-pointer"
        />

        {/* User Avatar */}
        <img
          src={getImagePath('/light/Header/Avatar.png')}
          alt="User avatar"
          className="rounded-full object-cover"
          style={{ height: "32px", width: "32px" }}
        />
      </div>
    </header>
  );
}
