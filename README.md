# Eco Paint Тоҷикистон

Сайти мағозаи рангҳои экологии **Eco Paint** (ҶДММ «Синои Тоҷир», ш. Ҳисор).
Сайт статикӣ аст (HTML + CSS + JavaScript), маълумотро дар Firebase (Firestore) нигоҳ медорад
ва фармоишҳоро ба WhatsApp мефиристад.

## Имкониятҳо

- Каталоги маҳсулот бо ҷустуҷӯ ва категорияҳо
- 5 забон: тоҷикӣ, русӣ, англисӣ, хитоӣ, форсӣ (RTL)
- Сабад (дар браузер нигоҳ дошта мешавад) бо ҳисоби маблағи умумӣ
- Фармоиш ба WhatsApp, пардохти нақд ё ба Dushanbe City, санҷиши автоматии чек (OCR)
- Ҳисобкунаки ранг: масоҳат, кг-и лозим ва арзонтарин омехтаи сатилҳо бо тугмаи «Ба сабад»
- Интихоби ранги девор дар суратҳои воқеии хонаҳо
- Профил ва бақайдгирӣ (Google ё форма)
- Панели админ (`/admin/`): маҳсулот, нарх, тахфиф, пардохт ва рӯйхати харидорон

## Сохтор

| Файл / папка | Вазифа |
| --- | --- |
| `index.html`, `script.js` | Сайти асосӣ |
| `style.css`, `features.css`, `language.css` | Услубҳо |
| `firebase-config.js` | Пайваст ба Firebase ва воридшавӣ бо Google |
| `wall-variants-data.js`, `images/wall-variants/` | Суратҳои интихоби ранги девор |
| `admin/` | Панели админ |
| `preview-server.cjs` | Сервери маҳаллӣ барои санҷиш |

## Силкаҳои интернет (Chrome)

- Сайт: https://sinojon-bot.github.io/eco-paint-website-2026/
- Админ: https://sinojon-bot.github.io/eco-paint-website-2026/admin/

Дар админ бо Google-и соҳиб ворид шавед → сурат/нархро иваз кунед → «Нигоҳ доштан».
Тағйирот ба сайти интернетӣ меравад (Firestore). Агар Google `unauthorized-domain` гӯяд, дар Firebase Authorized domains `sinojon-bot.github.io`-ро илова кунед.

## Ба кор андохтан дар компютер

Node.js лозим аст ([nodejs.org](https://nodejs.org)).

```bash
node preview-server.cjs            # сайт: http://127.0.0.1:8775/
node preview-server.cjs --admin    # админ: http://127.0.0.1:8775/admin/
```

Дар Windows метавонед `OPEN-SITE.cmd` ё `OPEN-ADMIN.cmd`-ро кушоед.
Файли `index.html`-ро мустақиман накушоед: Google ва Firebase танҳо аз `http(s)://` кор мекунанд.

## Эзоҳ дар бораи амният

Калиди `apiKey` дар `firebase-config.js` махфӣ нест — ин барои сайтҳои Firebase муқаррарист.
Ҳифзи маълумот бояд бо **Firestore Security Rules** таъмин шавад: навиштан ба `products` ва `settings`
танҳо барои email-и админ, ва ба `customers/{uid}` танҳо барои худи корбар.
Воридшавии маҳаллии «admin / 12345» дар админ ҳеҷ ҳуқуқи тағйири сервер намедиҳад.
