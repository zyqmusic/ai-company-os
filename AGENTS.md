# 项目开发约定

- 默认使用中文沟通；代码标识符与接口字段使用英文。
- 优先最小可行修改，保持 Next.js、NestJS、PostgreSQL、Flutter、FastAPI 的目标技术栈。
- 数据库默认使用 MySQL，除非需求明确要求其他数据库；当前 PRD 标注 PostgreSQL，数据库落地前需确认并记录决策。
- 密钥、账号和 API Key 仅通过 `.env` 配置，不得写入代码。
- 前端需提供加载、空数据、错误与操作反馈；后端修改后尽量执行最小验证。
- 每次完成开发后更新 `PROGRESS.md`、`NEXT_TASK.md`；有重要决策时更新 `DECISIONS.md`。
