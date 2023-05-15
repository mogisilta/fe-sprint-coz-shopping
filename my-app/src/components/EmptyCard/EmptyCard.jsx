import React from "react";
import styles from "./EmptyCard.module.css";

export default function EmptyCard () {
    return (
        <div className={styles.card}>
            <img className = {styles.image} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEXr6+u7u7vv7+/BwcHk5OTn5+e4uLjS0tLh4eHGxsbV1dXOzs7Kysq+vr7c3NzZ2dmxsbH19fXn7o/PAAADrElEQVR4nO2Zi5LbKgyGkbiJ++b9X/ZI4NjJNmmnbk1mTvlnNuvYbPhWCEkoSi0tLS0tLS0tLS0tLS0tLS0t/baMyH5wfgcALuKHpkekDpDwna6dviWfQaT9G6VLbYPOORhyb3Xh/Arhm9xBBJATq8wEcMW35vWG4CKxwjwAF+iGyuLNZHesCkwDcB5thlIgGGzu4f4kAJexQTIcFzzEm3fTAYoiR33HoYGGejYAh8Jtfr5LTlU3GaDYFvaIg9mrMhlAq3yEPKwBw2wADPWIuaQxz7dAOyxA8y1QVMwHgE9KTwZwVbm9KLHO0OxdAAG9vt8O+ZanA7jGfkdSgVAJWOdHQl4ErJwIApSG9IFcINmIo3CtBlV8uj0NAJz2xDFgLwimA9zrsm/3LgX4NtkrXQuQ9S8VPnViWFpa+ne0xZmPtUhsk+MAhnQUZI/X2l/coaguQBiTkiSir8jXfhQk0ja5GsDyKUyViB2gWIVlAPSH0K63QC1SA+uXAFyaXg6AUfPnk3sFgClc7wPow1sA+8VHpcuXoLEFsMErAB3k/dUABgxPnl8ABD4e6usBVC6UwGzbkOsfNwCsllOKLvuOuE5eBy7Ee/CRnjHZDqBTfxivt8AWip8jIU96b5ZMAFAvAe7X0wCSf7h+6JXkv9kq/kn/G28PTx4H/dVuedJBlDnz9i8o+Iegp2EaDwKNgTWUzJ7Je1TZLU0bGWhFfJqpJ6mosiLnO97ujT+umL73BaXxk+ZCH8apMPa9aXhA3nzDFIu6yEHFngcQg1aQRe0A5gAQq1fYejTd8eTlOwB4K9/tnAdApOAk0ggAL+4BgOQLJEi9VYlQxfvyjwCjjXUaoGZX2NeD07R1YncA0Dw3Kl9kETAHRCkU3gJ4OlPAofGm+7eNFgtbk3YLEJGh8WL4LcfhDHkkilcAUDhj/P78PuQsni6/DC/B4YSjITNO6uMsTE32g/X2DoBPFmgn/n9egdha9JBajFE9+4DY5abptu//ZnpFkDqAVAxxA+g66wNoLE86/KzwjirucELrg4OjV6rF302VJeg9E05YAhBSyvxXcHYXSJotI9b0kMDOvgEYl8iaVu7NiDB6E2UEH7UtQfTex/oHcSBwCLDqKRZvS+CL3ET6ulug28KUw9nleluhPwAILYoHHF3puwXoK3HUrVpvT3Tmcc2DOQBghzkP4PNQegAIwwdMLlD0nvm2kenBAuEA0PXc/L/WakctLS0tLS0tLS0tLS0tLf0v9B9HTyQUtrJESgAAAABJRU5ErkJggg==" alt="EmptyItem"/>
            <h3 className = {styles.text}>상품이 비어있어요</h3>
        </div>
    )
}