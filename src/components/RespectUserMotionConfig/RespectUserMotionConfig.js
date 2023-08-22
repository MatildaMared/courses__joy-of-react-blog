"use client";
import { MotionConfig } from "framer-motion";

export default function RespectUserMotionConfig({ children }) {
	return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
