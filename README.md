# ql_wails3_react_template

一个基于 **Wails3** 的 React + TypeScript 桌面应用开发模板。

## 技术栈

- **Wails3** - Go + Web 技术构建跨平台桌面应用
- **React 18** - 前端 UI 框架
- **React Router v7** - 声明式路由管理
- **TypeScript** - 类型安全的 JavaScript 超集
- **Tailwind CSS v4** - 实用优先的 CSS 框架（通过 Vite 插件集成）
- **Vite** - 极速的前端构建工具

## 快速开始

### 环境要求

- [Go](https://go.dev/dl/) 1.26+
- [Node.js](https://nodejs.org/) 18+
- [Wails v3](https://v3.wails.io/) 命令行工具

安装 Wails v3 CLI：

```bash
go install github.com/wailsapp/wails/v3/cmd/wails3@v3.0.0
```

### 使用模板创建项目

```bash
wails3 init -n myapp -t https://github.com/qlstrio/ql_wails3_react_template
```
#### 确保为 Go 代码生成ts绑定
在build/Taskfile.yml中的generate:bindings任务的cmds中添加-ts参数：
```yml
- wails3 generate bindings -f '{{.BUILD_FLAGS}}' -clean=true -time-type=Date{{if eq .OBFUSCATED "true"}} -obfuscated{{end}} -ts
```

## 相关链接

- [Wails v3 官方文档](https://v3.wails.io/)
- [Wails GitHub](https://github.com/wailsapp/wails)
- [React 官方文档](https://react.dev/)
- [Vite 官方文档](https://vitejs.dev/)

## License

MIT