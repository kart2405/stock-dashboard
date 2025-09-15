# 🌐 Custom Domain Setup Guide

This guide will help you set up a custom domain name for your Stock Dashboard hosted on GitHub Pages.

## 📋 Prerequisites

1. **Domain Name**: You need to own a domain name (e.g., from GoDaddy, Namecheap, Cloudflare, etc.)
2. **DNS Access**: Access to your domain's DNS settings
3. **GitHub Repository**: Your project is already deployed on GitHub Pages

## 🚀 Step-by-Step Setup

### Step 1: Choose Your Domain

**Options:**
- **Subdomain**: `dashboard.yourname.com` or `stocks.yourname.com`
- **Main Domain**: `yourname.com` or `stockdashboard.com`
- **Custom Domain**: Any domain you own

### Step 2: Configure DNS Records

#### Option A: Using a Subdomain (Recommended)
If using `dashboard.yourname.com`:

```
Type: CNAME
Name: dashboard (or whatever subdomain you want)
Value: kart2405.github.io
TTL: 3600 (or default)
```

#### Option B: Using Apex Domain
If using `yourname.com`:

```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
TTL: 3600
```

### Step 3: Update GitHub Repository

1. **Edit the CNAME file** in your repository:
   ```bash
   # Replace 'your-domain.com' with your actual domain
   echo "your-domain.com" > CNAME
   ```

2. **Update the GitHub Actions workflow**:
   - Edit `.github/workflows/deploy.yml`
   - Change `cname: your-domain.com` to your actual domain

3. **Commit and push changes**:
   ```bash
   git add CNAME .github/workflows/deploy.yml
   git commit -m "Configure custom domain: your-domain.com"
   git push
   ```

### Step 4: Configure GitHub Pages Settings

1. Go to your repository: `https://github.com/kart2405/stock-dashboard`
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. In **Custom domain** field, enter your domain (e.g., `dashboard.yourname.com`)
5. Check **Enforce HTTPS** (recommended)
6. Click **Save**

### Step 5: Verify Domain Setup

1. **DNS Propagation**: Wait 5-60 minutes for DNS changes to propagate
2. **Check DNS**: Use tools like:
   - [DNS Checker](https://dnschecker.org/)
   - [What's My DNS](https://www.whatsmydns.net/)
3. **Test Access**: Visit your custom domain in a browser
4. **Check HTTPS**: Ensure your site loads with HTTPS

## 🔧 Common DNS Providers Setup

### GoDaddy
1. Login to GoDaddy
2. Go to **My Products** → **DNS**
3. Click **Manage** next to your domain
4. Add the appropriate record (CNAME or A records)
5. Save changes

### Namecheap
1. Login to Namecheap
2. Go to **Domain List**
3. Click **Manage** next to your domain
4. Go to **Advanced DNS** tab
5. Add the appropriate record
6. Save changes

### Cloudflare
1. Login to Cloudflare
2. Select your domain
3. Go to **DNS** tab
4. Add the appropriate record
5. Ensure **Proxy status** is set to **DNS only** (gray cloud)
6. Save changes

### Google Domains
1. Login to Google Domains
2. Select your domain
3. Go to **DNS** tab
4. Add the appropriate record
5. Save changes

## ✅ Verification Checklist

- [ ] DNS records are correctly configured
- [ ] CNAME file contains your domain name
- [ ] GitHub Actions workflow is updated
- [ ] GitHub Pages custom domain is set
- [ ] HTTPS is enabled
- [ ] Site loads correctly on custom domain
- [ ] All links and functionality work

## 🔍 Troubleshooting

### Domain Not Loading
1. **Check DNS propagation**: Wait up to 24 hours
2. **Verify DNS records**: Ensure they point to GitHub Pages
3. **Clear browser cache**: Try incognito mode
4. **Check domain spelling**: Ensure no typos in CNAME file

### HTTPS Issues
1. **Enable HTTPS**: Check "Enforce HTTPS" in GitHub Pages settings
2. **Wait for SSL certificate**: GitHub automatically provisions SSL
3. **Clear cache**: Try accessing in incognito mode

### Subdomain Not Working
1. **Verify CNAME record**: Must point to `kart2405.github.io`
2. **Check DNS provider**: Some providers have different interfaces
3. **Wait for propagation**: DNS changes can take time

## 🎯 Example Configurations

### Example 1: Subdomain
```
Domain: dashboard.johnsmith.com
CNAME Record: dashboard → kart2405.github.io
CNAME File: dashboard.johnsmith.com
```

### Example 2: Custom Domain
```
Domain: stockdashboard.com
A Records: @ → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
CNAME File: stockdashboard.com
```

### Example 3: www Subdomain
```
Domain: www.stockdashboard.com
CNAME Record: www → kart2405.github.io
CNAME File: www.stockdashboard.com
```

## 📞 Support

If you encounter issues:
1. Check GitHub Pages documentation: [docs.github.com/en/pages](https://docs.github.com/en/pages)
2. Verify your DNS provider's documentation
3. Test with DNS checker tools
4. Contact your domain provider's support

## 🎉 Success!

Once configured, your Stock Dashboard will be accessible at your custom domain with:
- ✅ Professional custom URL
- ✅ Automatic HTTPS
- ✅ Fast global CDN
- ✅ Automatic deployments
- ✅ Free hosting on GitHub Pages

**Example URLs:**
- `https://dashboard.yourname.com`
- `https://stocks.yourname.com`
- `https://yourname.com`
