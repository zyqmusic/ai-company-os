# 项目上下文

## 产品

AI Company OS：统一研发与经营管理平台，覆盖公司、项目、Git、AI、音乐陪练、机器人、市场、内容及财务。

## 来源需求

- 原始需求：`Company_OS_Codex_PRD.md`
- MVP：音高识别、节奏识别、OCR、AI 点评、老师后台。
- 二阶段：MediaPipe 姿态识别、机器人联动。

## 当前架构

- 第一轮采用 Next.js 管理后台作为可运行入口。
- 后端服务、移动端、数据库及容器化在基础信息架构稳定后分阶段接入。

## 启动方式

```bash
pnpm install
pnpm dev
```

默认访问地址：`http://localhost:3000`。

依赖尚未安装：当前开发环境访问 npm Registry 时 DNS 解析失败，待网络可用后执行安装。
