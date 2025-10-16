# vite-react-ts-tw-template
Template repo for a new vite+react+ts+tailwind repo

```bash
pnpm create vite @latest new-app --template react-ts
```

配置tailwind(v4): 
> https://tailwindcss.com/blog/tailwindcss-v4
```bash
pnpm add tailwindcss  @tailwindcss/vite
```

默认是 `@tailwindcss/postcss` 这个插件, 如果使用`vite`则是`@tailwindcss/vite`
参见: > https://tailwindcss.com/blog/tailwindcss-v4#first-party-vite-plugin

在`vite.config.ts`中调整配置: ` plugins: [react(), tailwindcss()],`  
在根css文件中import tailwind
`@import "tailwindcss";`

调整vite的配置:
```json
resolve: {
    alias: {
    '@': path.resolve(__dirname, './src'),
    },
},
server: {
    host: '127.0.0.1',
    port: 4000
}

```
在`tsconfig.app.json`中调整`alias`配置:
```json
"baseUrl": ".",
"paths": {
    "@/*": ["src/*"]
},
```

