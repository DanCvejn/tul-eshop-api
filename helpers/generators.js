import { generateToken } from "randominator";

export const orderIdGenerator = async () => {
  const year = new Date().getFullYear();
  const code = await generateToken({ characterSet: ["number"], length: 4 });
  return `${year}${code}`;
}

export const createId = async () => {
  return await generateToken({ length: 6 });
}