function main() {
    const premiumLink = document.querySelector('a[aria-label="pixivプレミアム無料体験"]');
    if (premiumLink) {
        premiumLink.remove();
    }

    const asideElement = document.querySelector('.sc-jn70pf-0.edRgPV');
    if (asideElement) {
        let asideInnerHTML = asideElement.innerHTML;
        
        // innerHTMLの中のすべてのiframeを削除
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = asideInnerHTML;
        const iframes = tempDiv.querySelectorAll('iframe');
        iframes.forEach(iframe => iframe.remove());
        
        // innerHTMLを更新
        asideElement.innerHTML = tempDiv.innerHTML;
    }

    const asideElement2 = document.querySelector('.sc-jn70pf-0.edRgPV');
    if (asideElement2) {
        let asideInnerHTML2 = asideElement2.innerHTML;
        
        // innerHTMLを外側のHTMLと置き換える
        asideElement2.outerHTML = asideInnerHTML2;
    }
}

p = setInterval(main, 500);