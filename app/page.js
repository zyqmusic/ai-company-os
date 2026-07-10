"use client";

import { useState } from "react";

const modules = [
  { icon: "⌘", name: "公司中心", description: "组织、成员与权限", status: "本轮可用", tone: "blue" },
  { icon: "◈", name: "项目中心", description: "项目、任务与交付", status: "待接入数据", tone: "purple" },
  { icon: "⌥", name: "Git 中心", description: "仓库、提交、PR 与 Issue", status: "规划中", tone: "orange" },
  { icon: "✦", name: "AI 中心", description: "工作流与智能助手", status: "规划中", tone: "cyan" },
  { icon: "♫", name: "音乐陪练", description: "识别、点评与教师后台", status: "MVP 优先", tone: "pink" },
  { icon: "◎", name: "机器人", description: "姿态识别与设备联动", status: "二阶段", tone: "green" }
];

const activities = [
  ["项目中心", "新建了「音乐陪练 MVP」项目", "刚刚"],
  ["AI 中心", "AI 点评工作流等待配置", "今天"],
  ["Git 中心", "GitHub 集成尚未连接", "今天"]
];

export default function Home() {
  const [notice, setNotice] = useState("");
  const [activeModule, setActiveModule] = useState("总览");
  const showNotice = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  };

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand"><span>✦</span><div>AI Company OS<small>运营控制台</small></div></div>
        <nav>
          {["总览", "公司中心", "项目中心", "Git 中心", "AI 中心", "音乐陪练", "机器人", "市场与内容", "财务中心"].map((item) => (
            <button key={item} className={activeModule === item ? "nav-item active" : "nav-item"} onClick={() => { setActiveModule(item); showNotice(`${item}模块将在后续迭代开放`); }}>
              <span>{item === "总览" ? "▦" : "·"}</span>{item}
            </button>
          ))}
        </nav>
        <div className="sidebar-foot"><span className="avatar">Z</span><div><strong>管理员</strong><small>本地开发环境</small></div></div>
      </aside>

      <section className="content">
        <header><div><p className="eyebrow">工作台 / {activeModule}</p><h1>早上好，欢迎回来</h1><p className="muted">这里是公司研发与经营状态的一站式视图。</p></div><button className="primary" onClick={() => showNotice("项目创建功能将在项目中心接入后开放")}>＋ 新建项目</button></header>

        <section className="summary-grid" aria-label="运营摘要">
          <article><span>进行中项目</span><strong>01</strong><small>音乐陪练 MVP</small></article>
          <article><span>待处理事项</span><strong>06</strong><small>需分配负责人</small></article>
          <article><span>AI 工作流</span><strong>00</strong><small>等待首次配置</small></article>
          <article><span>团队成员</span><strong>01</strong><small>管理员账户</small></article>
        </section>

        <section className="section-title"><div><h2>业务模块</h2><p>按优先级逐步接入真实数据与服务</p></div><button className="text-button" onClick={() => showNotice("模块清单已同步自产品需求文档")}>查看路线图 →</button></section>
        <section className="module-grid">
          {modules.map((module) => <button className="module-card" key={module.name} onClick={() => { setActiveModule(module.name); showNotice(`${module.name}：${module.description}`); }}><span className={`module-icon ${module.tone}`}>{module.icon}</span><div><h3>{module.name}</h3><p>{module.description}</p><small>{module.status}</small></div><b>→</b></button>)}
        </section>

        <section className="lower-grid">
          <article className="panel"><div className="panel-head"><div><h2>最近动态</h2><p>系统内的关键活动</p></div><button className="text-button" onClick={() => showNotice("暂无更多动态")}>全部动态</button></div><div className="activity-list">{activities.map(([category, text, time]) => <div className="activity" key={category}><span className="activity-dot"/><div><strong>{category}</strong><p>{text}</p></div><time>{time}</time></div>)}</div></article>
          <article className="panel focus"><div className="panel-head"><div><h2>当前重点</h2><p>第一轮开发目标</p></div><span className="badge">进行中</span></div><h3>管理后台基础工程</h3><p>完成信息架构、模块入口与后续服务接入边界。</p><div className="progress"><i /></div><small>第一轮：基础框架与工作台</small></article>
        </section>
      </section>
      {notice && <div className="toast" role="status">{notice}</div>}
    </main>
  );
}
