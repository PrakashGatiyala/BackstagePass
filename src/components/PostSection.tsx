import { getImagePath } from '../utils/imageUtils';

export default function PostSection() {
  return (
    <main
      className="flex flex-col"
      style={{
        width: "640px",
        paddingTop: "24px",
        gap: "24px",
      }}
    >
      {/* First Post — Your Submission */}
      <div
        className="flex flex-col"
        style={{
          width: "640px",
          gap: "12px",
          borderRadius: "24px",
          backgroundColor: "#E6F6EB",
        }}
      >
        {/* Your Submission banner */}
        <div
          style={{
            width: "100%",
            height: "98px",
            borderRadius: "24px 24px 0 0",
            backgroundImage: `url('${getImagePath('/light/Page/Submission_BG.png')}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "14.5px",
          }}
        >
          <span
            className="font-semibold"
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
              color: "#218358",
            }}
          >
            Your Submission
          </span>
        </div>

        {/* Post card — overlaps submission banner */}
        <div
          className="flex flex-col"
          style={{
            width: "640px",
            borderRadius: "24px",
            border: "1px solid var(--Colors-Neutral-Neutral-4, #EAE7EC)",
            backgroundColor: "var(--Panel-solid, #FFFFFF)",
            marginTop: "-69px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Top section — User info — w:640 h:72 border-bottom gap:8 p:12 */}
          <div
            className="flex items-center"
            style={{
              width: "640px",
              height: "72px",
              padding: "12px",
              gap: "8px",
              borderBottom: "none",
            }}
          >
            {/* Profile avatar — 48x48 rounded */}
            <img
              src={getImagePath('/light/Page/Post_Avatar.png')}
              alt="Ashraf Idrishi"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "9999px",
                objectFit: "cover",
              }}
            />

            {/* Name container — w:528 h:48 gap:4 */}
            <div
              className="flex flex-col justify-center flex-1"
              style={{
                height: "48px",
                gap: "4px",
              }}
            >
              <span
                className="font-semibold"
                style={{
                  fontSize: "14px",
                  lineHeight: "24px",
                  color: "var(--text-primary)",
                }}
              >
                Ashraf Idrishi
              </span>
              <span
                style={{
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "var(--text-secondary, #6b6b6b)",
                }}
              >
                1s
              </span>
            </div>

            {/* More options */}
            <button
              className="cursor-pointer"
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                position: "relative",
                width: "16px",
                height: "16px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{ position: "absolute", top: 0, left: 0 }}
              >
                <circle cx="3.87" cy="8" r="1.2" fill="#211F26" />
                <circle cx="8" cy="8" r="1.2" fill="#211F26" />
                <circle cx="12.13" cy="8" r="1.2" fill="#211F26" />
              </svg>
            </button>
          </div>

          {/* Text section — w:640 h:36 pr:16 pb:16 pl:16 gap:10 */}
          <div
            style={{
              width: "640px",
              height: "36px",
              paddingRight: "16px",
              paddingBottom: "16px",
              paddingLeft: "16px",
              gap: "10px",
            }}
          >
            <span
              style={{
                width: "608px",
                height: "20px",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 400,
                textAlign: "left",
                color: "var(--text-primary)",
                background: "transparent",
              }}
            >
              Today's challenge workout completed—feeling stronger already
            </span>
          </div>

          {/* Image section — w:640 h:307 gap:12 */}
          <div
            style={{
              width: "640px",
              height: "307px",
              gap: "12px",
            }}
          >
            <img
              src={getImagePath('/light/Page/Post_Video_thumbnail.svg')}
              alt="Post video thumbnail"
              style={{
                width: "640px",
                height: "307px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Reaction section — w:640 h:56 justify-between pt:12 pr:16 pb:12 pl:16 */}
          <div
            className="flex items-center justify-between"
            style={{
              width: "640px",
              height: "56px",
              paddingTop: "12px",
              paddingRight: "16px",
              paddingBottom: "12px",
              paddingLeft: "16px",
            }}
          >
            {/* Left — Reactions: w:152 h:32 gap:4 */}
            <div
              className="flex items-center"
              style={{
                width: "152px",
                height: "32px",
                gap: "4px",
              }}
            >
              {/* Emoji pill with count */}
              <div
                className="flex items-center"
                style={{
                  height: "32px",
                  gap: "4px",
                  borderRadius: "9999px",
                  padding: "4px 8px",
                  backgroundColor: "var(--bg-reaction-pill, #F5F3F6)",
                }}
              >
                <img
                  src={getImagePath('/light/Page/Reaction/highfive_emojii.png')}
                  alt="highfive"
                  style={{ width: "20px", height: "20px" }}
                />
                <img
                  src={getImagePath('/light/Page/Reaction/eyeswithLove_emojii.png')}
                  alt="love"
                  style={{ width: "20px", height: "20px" }}
                />
                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: 500,
                    color: "#000000",
                  }}
                >
                  18
                </span>
              </div>

              {/* Smiley icon */}
              <button
                className="flex items-center justify-center cursor-pointer"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "9999px",
                  border: "none",
                  background: "transparent",
                  padding: 0,
                }}
              >
                <img
                  src={getImagePath('/light/Page/Reaction/face_dummy_icon.png')}
                  alt="react"
                  style={{ width: "20px", height: "20px" }}
                />
              </button>

              {/* Comment icon */}
              <button
                className="flex items-center justify-center cursor-pointer"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "9999px",
                  border: "none",
                  background: "transparent",
                  padding: 0,
                }}
              >
                <img
                  src={getImagePath('/light/Page/Reaction/comment_icon.png')}
                  alt="comment"
                  style={{ width: "20px", height: "20px" }}
                />
              </button>
            </div>

            {/* Right — Comments: w:101 h:28 gap:4 radius:full p:1 */}
            <div
              className="flex items-center"
              style={{
                width: "101px",
                height: "28px",
                gap: "4px",
                borderRadius: "9999px",
                padding: "4px",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 500,
                  color: "#000000",
                }}
              >
                10 Comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
