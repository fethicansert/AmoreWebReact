import React from "react";

const NotificationLayout = ({
  image,
  title,
  content,
  icon,
  time,
  className,
  onClick,
  isBlur,
  hideTime = false,
}) => {
  const bluredNotificationStyle = {
    image: isBlur ? { filter: "blur(6.5px)" } : {},
    text: isBlur
      ? { textShadow: "0 0 7px rgba(0, 0, 0, 1)", color: "transparent" }
      : {},
  };

  return (
    <div onClick={onClick} className={`notification-layout ${className || ""}`}>
      <div className="notification-layout-image-avatar">
        <img
          style={bluredNotificationStyle.image}
          loading="lazy"
          src={image}
        ></img>
      </div>
      <div className="notification-layout-content">
        {
          <span
            className="notification-layout-title"
            style={bluredNotificationStyle.text}
          >
            {title}
          </span>
        }
        {<span className="notification-layout-text">{content}</span>}
      </div>

      <div
        className="notification-icon-time-flex"
        style={{ gap: !hideTime ? "10px 0" : "0" }}
      >
        {icon && icon}
        {time && !hideTime && (
          <span className="notification-time"> {time}</span>
        )}
      </div>
    </div>
  );
};

export default NotificationLayout;
