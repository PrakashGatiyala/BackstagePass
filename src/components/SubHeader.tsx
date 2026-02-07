import { getImagePath } from '../utils/imageUtils';

export default function SubHeader() {
  return (
    <div
      className="flex items-center justify-between"
      style={{
        height: "56px",
        paddingLeft: "18px",
        paddingRight: "24px",
        background: "var(--Panel-default, #FFFFFFCC)",
        borderTop: "1px solid var(--Colors-Neutral-Neutral-3, #F2EFF3)",
        borderBottom: "1px solid var(--Colors-Neutral-Neutral-3, #F2EFF3)",
      }}
    >
      {/* Left section — w:193 h:48 gap:16 */}
      <div
        className="flex items-center"
        style={{ height: "48px", gap: "16px" }}
      >
        {/* Back button — w:73 h:48 border-bottom:2px gap:8 */}
        <button
          className="flex items-center cursor-pointer"
          style={{
            height: "48px",
            gap: "8px",
            borderBottom: "2px solid transparent",
            background: "transparent",
            padding: 0,
          }}
        >
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 1L1 6L6 11"
              stroke="var(--text-primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="font-semibold"
            style={{
              fontSize: "14px",
              lineHeight: "24px",
              color: "var(--text-primary)",
            }}
          >
            Back
          </span>
        </button>

        {/* Vertical divider — w:1 h:48 p:8px top/bottom */}
        <div
          style={{
            width: "1px",
            height: "48px",
            paddingTop: "8px",
            paddingBottom: "8px",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "100%",
              backgroundColor: "var(--Colors-Neutral-Neutral-3, #F2EFF3)",
            }}
          />
        </div>

        {/* Day 1 of 9 — w:87 h:26 size:4 semibold */}
        <span
          className="font-semibold"
          style={{
            fontSize: "16px",
            lineHeight: "26px",
            color: "var(--text-primary)",
          }}
        >
          Day 1 of 9
        </span>
      </div>

      {/* Right section — w:230 h:24 gap:8 */}
      <div className="flex items-center" style={{ height: "24px", gap: "8px" }}>
        {/* 9-Day Fitness Challenge — w:198 h:24 size:3 semibold */}
        <span
          className="font-semibold"
          style={{
            fontSize: "14px",
            lineHeight: "24px",
            color: "var(--text-primary)",
          }}
        >
          9-Day Fitness Challenge
        </span>

        {/* Info icon */}
        <img
          src={getImagePath('/light/Page/Info.png')}
          alt="Info"
          style={{ width: "24px", height: "24px" }}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
