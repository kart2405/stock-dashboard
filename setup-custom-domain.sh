#!/bin/bash

# Custom Domain Setup Script for Stock Dashboard
# This script helps you quickly configure a custom domain for GitHub Pages

echo "🌐 Custom Domain Setup for Stock Dashboard"
echo "=========================================="
echo ""

# Check if domain is provided
if [ $# -eq 0 ]; then
    echo "Usage: ./setup-custom-domain.sh your-domain.com"
    echo ""
    echo "Examples:"
    echo "  ./setup-custom-domain.sh dashboard.yourname.com"
    echo "  ./setup-custom-domain.sh stocks.yourname.com"
    echo "  ./setup-custom-domain.sh yourname.com"
    echo ""
    exit 1
fi

DOMAIN=$1

echo "Setting up custom domain: $DOMAIN"
echo ""

# Update CNAME file
echo "📝 Updating CNAME file..."
echo "$DOMAIN" > CNAME
echo "✅ CNAME file updated with: $DOMAIN"

# Update GitHub Actions workflow
echo ""
echo "🔧 Updating GitHub Actions workflow..."
sed -i.bak "s/cname: your-domain.com/cname: $DOMAIN/" .github/workflows/deploy.yml
rm .github/workflows/deploy.yml.bak 2>/dev/null || true
echo "✅ GitHub Actions workflow updated"

# Create commit
echo ""
echo "📦 Creating commit..."
git add CNAME .github/workflows/deploy.yml
git commit -m "Configure custom domain: $DOMAIN"
echo "✅ Changes committed"

echo ""
echo "🚀 Next Steps:"
echo "=============="
echo "1. Push changes: git push"
echo "2. Configure DNS:"
echo "   - Add CNAME record: $DOMAIN → kart2405.github.io"
echo "   - Or add A records pointing to GitHub Pages IPs"
echo "3. Update GitHub Pages settings:"
echo "   - Go to: https://github.com/kart2405/stock-dashboard/settings/pages"
echo "   - Set Custom domain: $DOMAIN"
echo "   - Enable 'Enforce HTTPS'"
echo "4. Wait for DNS propagation (5-60 minutes)"
echo "5. Visit: https://$DOMAIN"
echo ""
echo "📖 For detailed instructions, see: CUSTOM_DOMAIN_SETUP.md"
echo ""
echo "🎉 Your Stock Dashboard will be live at: https://$DOMAIN"
