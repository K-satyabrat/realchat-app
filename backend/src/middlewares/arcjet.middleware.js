import { aj } from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";

const arcjetProtectApi = async (req, res, next) => {
  try {
    const decision = await aj.protect(req);

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({ message: "Too Many Requests" });
      } else if (decision.reason.isBot()) {
        return res.status(403).json({ message: "No bots allowed" });
      } else {
        return res.status(403).json({ message: "Forbidden" });
      }
    } else if (decision.results.some(isSpoofedBot)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  } catch (error) {
    console.log("Arcjet error:", error);
    next();
  }
};

export default arcjetProtectApi;
