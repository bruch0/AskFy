import { loadEnvConfig } from "@next/env";

const setupTestEnv = async () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};

export default setupTestEnv;
