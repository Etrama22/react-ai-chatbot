import styles from "./Chat.module.css";
import PropTypes from "prop-types";

const WELCOME_MESSAGE = {
  role: "assistant",
  content:
    "Welcome to the chat! I can help you with any questions or topics you",
};

export function Chat({ messages }) {
  return (
    <div className={styles.Chat}>
      {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
        <div key={index} className={styles.Message} data-role={role}>
          {content}
        </div>
      ))}
    </div>
  );
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
