import type { DefaultTheme } from 'metaapp-prodigytech-doc-theme'
import { defineConfigWithTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: 'Index',
    items: [{ text: '介绍', link: '/index.md' }]
  }
]

export default defineConfigWithTheme<DefaultTheme.Config>({
  ignoreDeadLinks: true,
  title: '教程',
  appearance: false,
  description: '口袋方舟编辑器的教程文档',
  outDir: '../dist',
  head: [['link', { rel: 'icon', href: '/favicon_kd.ico' }]],
  themeConfig: {
    logo: '/logo.png',
    sidebar: [
      {
        text: 'index',
        link: '/index.md',
        collapsible: false,
        collapsed: false,
        items: [
          {
            text: '教程介绍',
            link: '/index.md'
          },
          { text: '开始使用', link: '/md/1.2.html' }
        ]
      },
      {
        text: '安装使用',
        link: '/md/1.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '了解口袋方舟编辑器', link: '/md/1.1.md' },
          { text: '安装与启动', link: '/md/1.2.md' },
          { text: 'VSCode安装', link: '/md/1.3.md' },
          { text: '编辑器界面', link: '/md/1.5.md' },
          { text: '编辑器基本操作', link: '/md/1.6.md' },
          { text: '导入第三方项目', link: '/md/1.7.md' },
          { text: '游戏发布&更新&测试', link: '/md/1.4.md' }
        ]
      },
      {
        text: '基础概念',
        link: '/md/2.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'TypeScript学习', link: '/md/2.1.md' },
          { text: '客户端与服务端', link: '/md/2.2.md' },
          { text: '脚本执行逻辑', link: '/md/2.3.md' },
          { text: '调试与输出', link: '/md/2.4.md' },
          { text: '事件通信', link: '/md/2.5.md' },
          { text: '服务端实时日志', link: '/md/2.6.md' }
        ]
      },
      {
        text: '基础入门',
        link: '/md/3.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '3D坐标系', link: '/md/3.1.md' },
          { text: '特效', link: '/md/3.2.md' },
          { text: '音效', link: '/md/3.3.md' },
          { text: '初生点', link: '/md/3.4.md' },
          { text: '角色动画', link: '/md/3.5.md' },
          { text: '游戏物体的使用', link: '/md/3.6.md' },
          { text: '游戏物体父子级', link: '/md/3.7.md' },
          { text: '玩家与角色', link: '/md/3.8.md' },
          { text: '角色编辑器', link: '/md/3.9.md' },
          { text: '触发器', link: '/md/3.10.md' },
          { text: '预制体', link: '/md/3.11.md' },
          { text: '摄像机', link: '/md/3.0.1.md' },
          { text: '数据持久化', link: '/md/3.0.2.md' },
          { text: '冲量', link: '/md/3.0.3.md' },
          { text: '交互物', link: '/md/3.0.4.md' },
          { text: '射线检测', link: '/md/3.0.5.md' },
          { text: '投掷物', link: '/md/3.0.6.md' }
        ]
      },
      {
        text: '跳一跳小游戏',
        link: '/md/4.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '创建工程', link: '/md/4.1.md' },
          { text: '播放游戏音乐', link: '/md/4.2.md' },
          { text: '添加角色特效', link: '/md/4.3.md' },
          { text: '搭建跳跃场景', link: '/md/4.4.md' },
          { text: '添加失败区域', link: '/md/4.5.md' },
          { text: '添加胜利区域', link: '/md/4.6.md' }
        ]
      },
      {
        text: '游戏界面',
        link: '/md/5.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '创建UI', link: '/md/5.1.md' },
          { text: '图片', link: '/md/5.2.md' },
          { text: '文本', link: '/md/5.3.md' },
          { text: '按钮', link: '/md/5.4.md' },
          { text: '容器', link: '/md/5.5.md' },
          { text: '快速布局', link: '/md/5.0.1.md' },
          { text: 'UI自适应对齐', link: '/md/5.0.2.md' },
          { text: 'UI显示/隐藏', link: '/md/5.0.3.md' },
          { text: '输入框', link: '/md/5.0.4.md' },
          { text: '进度条', link: '/md/5.0.5.md' },
          { text: '滚动框', link: '/md/5.0.6.md' },
          { text: '加载图', link: '/md/5.0.7.md' },
          { text: '摇杆', link: '/md/5.0.8.md' }
        ]
      },
      {
        text: '常用代码片段',
        link: '/md/6.2.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '跳跃区', link: '/md/6.2.1.md' },
          { text: '变速区', link: '/md/6.2.2.md' },
          { text: '特效区', link: '/md/6.2.3.md' },
          { text: '布娃娃区', link: '/md/6.2.4.md' },
          { text: '换装区', link: '/md/6.2.5.md' },
          { text: '消失地板', link: '/md/6.2.6.md' },
          { text: '传送区', link: '/md/6.2.7.md' }
        ]
      },
      {
        text: '炸弹人小游戏',
        link: '/md/7.1.md',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '创建工程', link: '/md/7.1.md' },
          { text: '入口类与控制界面', link: '/md/7.2.md' },
          { text: '炸弹预制体', link: '/md/7.3.md' },
          { text: '主角释放炸弹', link: '/md/7.4.md' },
          { text: '血量UI与数据', link: '/md/7.5.md' },
          { text: '添加游戏场景', link: '/md/7.6.md' },
          { text: '制作一个减速区域', link: '/md/7.7.md' }
        ]
      }
    ],
    algolia: {
      appId: 'I2PHYUBLCN',
      apiKey: '62ee775311415d26549e0e30fef5aa38',
      indexName: 'api-docs_prodigytech',
      project: {
        active: 'learning-docs',
        arr: [
          {
            key: 'learning-docs',
            facetFilters: ['tags:learning-docs'],
            name: '教程'
          },
          {
            key: 'product-docs',
            facetFilters: ['tags:product-docs'],
            name: '产品手册'
          },
          {
            key: 'api-docs',
            facetFilters: ['tags:api-docs'],
            name: 'API'
          }
        ]
      },
      searchPage: 'https://search.ark.online/#/search'
    },
    pandora: {
      type: 'learning'
    },
    siteTitle: '教程',
    nav: [
      {
        text: '创作者',
        link: 'https://creator.ark.online/'
      },
      {
        text: '产品手册',
        link: 'https://docs.ark.online/'
      },
      {
        text: 'API',
        link: 'https://api-docs.ark.online/'
      },
      {
        text: '论坛',
        link: 'https://forum.ark.online/'
      }
    ],
    feedback: 'https://github.com/prodigytech-doc/learning-docs/',
    outline: [2, 3],
    editLink: {
      pattern:
        'https://github.com/prodigytech-doc/learning-docs/tree/main/docs/:path',
      text: '编辑'
    },
    socialLinks: [
      // { link: 'https://github.com/prodigytech-doc/api-docs', icon: 'github' },
      {
        link: 'https://github.com/prodigytech-doc/learning-docs/issues',
        icon: {
          svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" rx="10" fill="#676D77"/>
          <path d="M14.5 15C15.3284 15 16 14.3284 16 13.5V6.5C16 5.67163 15.3284 5 14.5 5H5.49999C4.67163 5 4 5.67163 4 6.5V13.5C4 14.3284 4.67163 15 5.49999 15H7.74998L10.75 18V15H14.5Z" fill="white"/>
          <path d="M10.0003 13.2857C10.3553 13.2857 10.6431 12.9979 10.6431 12.6429C10.6431 12.2878 10.3553 12 10.0003 12C9.64524 12 9.35742 12.2878 9.35742 12.6429C9.35742 12.9979 9.64524 13.2857 10.0003 13.2857Z" fill="#676D77"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19627 6.55985C9.57999 6.4009 10.0022 6.35932 10.4096 6.44035C10.817 6.52137 11.1911 6.72138 11.4848 7.01507C11.7785 7.30876 11.9785 7.68295 12.0596 8.09031C12.1406 8.49767 12.099 8.91991 11.94 9.30363C11.7811 9.68735 11.5119 10.0153 11.1666 10.2461C10.9911 10.3633 10.8 10.4528 10.5999 10.5125V11C10.5999 11.3314 10.3313 11.6 9.9999 11.6C9.66853 11.6 9.3999 11.3314 9.3999 11V10.4C9.3999 9.82145 9.85795 9.47175 10.2371 9.36818C10.3301 9.34278 10.4189 9.30246 10.4999 9.24832C10.6479 9.14942 10.7633 9.00886 10.8314 8.84441C10.8995 8.67996 10.9173 8.499 10.8826 8.32441C10.8479 8.14983 10.7622 7.98947 10.6363 7.8636C10.5104 7.73773 10.3501 7.65201 10.1755 7.61729C10.0009 7.58256 9.81994 7.60038 9.65549 7.6685C9.49103 7.73662 9.35047 7.85198 9.25158 7.99998C9.15269 8.14799 9.0999 8.32199 9.0999 8.49999C9.0999 8.83137 8.83127 9.1 8.4999 9.1C8.16853 9.1 7.8999 8.83137 7.8999 8.49999C7.8999 8.08465 8.02307 7.67864 8.25382 7.3333C8.48457 6.98795 8.81254 6.71879 9.19627 6.55985ZM10.5496 10.5273C10.5496 10.5273 10.5499 10.527 10.5505 10.5268Z" fill="#676D77"/>
          </svg>
          `
        }
      }
    ],
    lastUpdatedText: 'Updated Date',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
  },
  markdown: {
    lineNumbers: true,
  },
})
