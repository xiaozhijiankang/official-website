# 北京贰零贰零科技发展有限公司官网

这是北京贰零贰零科技发展有限公司的中英文静态官网，英文品牌名称为 `Erlingerling Technology`，面向 GitHub Pages 部署。网站默认显示英文，可切换中文；内容以公司业务为主，只简要介绍旗下健身训练应用 PowerClaw。

## 内容来源

PowerClaw 的产品定位参考同级项目 `powerclaw-web`。公司官网只保留一段产品概述，并将详细信息引导至产品官网 `https://powerclawapp.cn/`；PowerClaw 的使用说明、用户协议和产品隐私政策继续由产品官网维护。

## 本地预览

在项目目录执行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 发布到 GitHub Pages

1. 将本项目推送到 GitHub 仓库的默认分支。
2. 打开仓库的 **Settings → Pages**。
3. 在 **Build and deployment** 中选择 **Deploy from a branch**。
4. 选择默认分支及 `/(root)` 目录并保存。
5. 在 **Custom domain** 中填写 `www.erlingerling.com`。
6. DNS 生效并且证书可用后，启用 **Enforce HTTPS**。

## 域名 DNS

建议将 `www.erlingerling.com` 作为主域名：

- `www`：添加 `CNAME`，指向 `xiaozhijiankang.github.io`
- 根域名 `erlingerling.com`：添加以下四条 GitHub Pages `A` 记录，使其跳转到 `www.erlingerling.com`

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

配置 DNS 前，应先在 GitHub Pages 设置中添加自定义域名，并建议在 GitHub 账户或组织设置中验证域名所有权。不要添加通配符 DNS 记录。

## 上线前需要确认

- 确认 Apple、D-U-N-S 和其他正式材料统一使用 `BEI JING ER LING ER LING KE JI FA ZHAN YOU XIAN GONG SI`
- 隐私政策和服务条款是否需要结合具体产品进一步补充
- 如可公开，建议补充公司的完整注册地址或办公地址
