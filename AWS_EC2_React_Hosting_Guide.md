# 🚀 Complete Guide: Host React App on AWS EC2 (Amazon Linux 2023)

## 📋 Prerequisites
- AWS EC2 instance running Amazon Linux 2023
- Domain name (e.g., zeptofinance.com)
- React application ready for deployment
- SSH access to your EC2 instance

---

## 🔧 Step 1: System Updates & Package Installation

```bash
# Update system packages
sudo dnf update -y

# Install essential packages
sudo dnf install -y nginx git wget curl
```

**💡 Purpose:** Ensures your system is up-to-date and installs necessary packages.

---

## 🌐 Step 2: Configure Nginx Web Server

```bash
# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Verify Nginx is running
sudo systemctl status nginx
```

**💡 Purpose:** Sets up Nginx to serve your React application.

---

## 📁 Step 3: Create Web Directory Structure

```bash
# Create web root directory
sudo mkdir -p /var/www/html

# Set proper ownership and permissions
sudo chown -R ec2-user:ec2-user /var/www/html
sudo chmod -R 755 /var/www/html
```

**💡 Purpose:** Creates the directory where your React app will be hosted with proper permissions.

---

## ⚙️ Step 4: Configure Nginx for React SPA

```bash
# Backup original Nginx config
sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup

# Edit Nginx configuration
sudo nano /etc/nginx/nginx.conf
```

**Replace the server block with:**

```nginx
server {
    listen 80;
    server_name zeptofinance.com www.zeptofinance.com;
    
    root /var/www/html;
    index index.html;
    
    # Handle React Router
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
}
```

**💡 Purpose:** Configures Nginx to properly serve a React Single Page Application with caching and security headers.

---

## 🔒 Step 5: Install SSL Certificate with Let's Encrypt

```bash
# Install Certbot
sudo dnf install -y certbot python3-certbot-nginx

# Test Nginx configuration
sudo nginx -t

# Reload Nginx if test passes
sudo systemctl reload nginx

# Obtain SSL certificate
sudo certbot --nginx -d zeptofinance.com -d www.zeptofinance.com
```

**💡 Purpose:** Secures your website with HTTPS using free Let's Encrypt certificates.

---

## 🔄 Step 6: Configure SSL Auto-Renewal

```bash
# Test auto-renewal
sudo certbot renew --dry-run

# Add to crontab for automatic renewal
sudo crontab -e
```

**Add this line to crontab:**
```bash
0 12 * * * /usr/bin/certbot renew --quiet
```

**💡 Purpose:** Ensures SSL certificates automatically renew before expiration.

---

## 🚀 Step 7: Deploy Your React Application

### Option A: Deploy from Local Machine

```bash
# On your local machine, build the React app
npm run build

# Copy build files to server (replace with your server details)
scp -r build/* ec2-user@your-ec2-ip:/var/www/html/
```

### Option B: Deploy from Git Repository

```bash
# On your EC2 instance
cd /var/www/html

# Clone your repository (replace with your repo URL)
git clone https://github.com/yourusername/your-react-app.git

# Install dependencies and build
cd your-react-app
npm install
npm run build

# Copy build files to web root
sudo cp -r build/* /var/www/html/

# Clean up
cd ..
sudo rm -rf your-react-app
```

**💡 Purpose:** Deploys your React application to the web server.

---

## 🔧 Step 8: Final Configuration & Testing

```bash
# Set proper permissions for deployed files
sudo chown -R nginx:nginx /var/www/html
sudo chmod -R 755 /var/www/html

# Restart Nginx
sudo systemctl restart nginx

# Check Nginx status
sudo systemctl status nginx

# Test your website
curl -I http://zeptofinance.com
curl -I https://zeptofinance.com
```

**💡 Purpose:** Ensures everything is properly configured and running.

---

## 🛠️ Step 9: Firewall Configuration

```bash
# Configure firewall (if using firewalld)
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload

# Or configure security groups in AWS Console:
# - HTTP (Port 80)
# - HTTPS (Port 443)
# - SSH (Port 22)
```

**💡 Purpose:** Ensures your website is accessible from the internet.

---

## 📊 Step 10: Monitoring & Maintenance

```bash
# Check Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Check SSL certificate status
sudo certbot certificates

# Monitor disk space
df -h

# Check system resources
htop
```

**💡 Purpose:** Helps monitor your server's health and performance.

---

## 🔄 Step 11: Update Deployment Script

Create a deployment script for future updates:

```bash
# Create deployment script
sudo nano /home/ec2-user/deploy.sh
```

**Add this content:**

```bash
#!/bin/bash

# Update deployment script
echo "🚀 Starting deployment..."

# Navigate to web root
cd /var/www/html

# Backup current version
sudo cp -r . ../html_backup_$(date +%Y%m%d_%H%M%S)

# Pull latest changes (if using git)
# git pull origin main

# Build the application
npm install
npm run build

# Copy new build files
sudo cp -r build/* /var/www/html/

# Set permissions
sudo chown -R nginx:nginx /var/www/html
sudo chmod -R 755 /var/www/html

# Restart Nginx
sudo systemctl restart nginx

echo "✅ Deployment completed successfully!"
```

**Make it executable:**
```bash
chmod +x /home/ec2-user/deploy.sh
```

---

## ✅ Verification Checklist

- [ ] Nginx is running and enabled
- [ ] Website is accessible via HTTP
- [ ] SSL certificate is installed and working
- [ ] HTTPS redirects are working
- [ ] React app loads correctly
- [ ] Static assets are cached
- [ ] Auto-renewal is configured
- [ ] Firewall allows HTTP/HTTPS traffic
- [ ] Logs are being generated
- [ ] Backup strategy is in place

---

## 🆘 Troubleshooting

### Common Issues:

1. **Nginx won't start:**
   ```bash
   sudo nginx -t  # Check configuration
   sudo journalctl -u nginx  # Check logs
   ```

2. **SSL certificate issues:**
   ```bash
   sudo certbot certificates  # Check certificate status
   sudo certbot renew --dry-run  # Test renewal
   ```

3. **Permission issues:**
   ```bash
   sudo chown -R nginx:nginx /var/www/html
   sudo chmod -R 755 /var/www/html
   ```

4. **React app not loading:**
   - Check if `index.html` exists in `/var/www/html/`
   - Verify Nginx configuration for SPA routing
   - Check browser console for errors

---

## 📚 Additional Resources

- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [AWS EC2 Documentation](https://docs.aws.amazon.com/ec2/)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)

---

**🎉 Congratulations! Your React application is now live on AWS EC2 with Nginx and SSL!**

Your website should be accessible at: `https://zeptofinance.com` 