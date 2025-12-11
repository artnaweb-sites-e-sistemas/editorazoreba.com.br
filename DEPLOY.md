# Instruções para Deploy no cPanel

## Passos para fazer o deploy:

### 1. Fazer o build do projeto:

```bash
npm run build
```

Isso criará uma pasta `out` com todos os arquivos estáticos do site.

### 2. Copiar o arquivo contact.php:

Após o build, copie o arquivo `public/contact.php` para dentro da pasta `out`:

```bash
# No Windows (PowerShell):
Copy-Item public\contact.php out\contact.php

# No Linux/Mac:
cp public/contact.php out/contact.php
```

### 3. Copiar o arquivo .htaccess:

Copie o arquivo `.htaccess` da raiz do projeto para dentro da pasta `out`:

```bash
# No Windows (PowerShell):
Copy-Item .htaccess out\.htaccess

# No Linux/Mac:
cp .htaccess out/.htaccess
```

### 4. Fazer upload para o cPanel:

1. Acesse o File Manager do seu cPanel
2. Vá para a pasta `public_html` (ou a pasta onde seu site está configurado)
3. Faça upload de TODOS os arquivos da pasta `out`
4. Certifique-se de que o arquivo `contact.php` está na raiz do `public_html`
5. Certifique-se de que o arquivo `.htaccess` está na raiz do `public_html`

### 5. Verificar permissões:

No cPanel File Manager, verifique se o arquivo `contact.php` tem permissões de leitura e execução (644 ou 755).

### 6. Testar o formulário:

Acesse seu site e teste o formulário de contato no rodapé para garantir que está funcionando.

## Nota importante:

- O arquivo `contact.php` precisa estar na mesma pasta que o `index.html` do site
- Se o email não funcionar, pode ser necessário configurar o PHP mail no cPanel ou usar um serviço de email SMTP
- Se você usar um domínio diferente, pode precisar ajustar as configurações de CORS no `contact.php`

## Estrutura final no servidor:

```
public_html/
├── index.html
├── contact.php
├── .htaccess
├── _next/
├── images/
└── ... (outros arquivos da pasta out)
```



