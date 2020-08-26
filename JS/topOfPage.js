document.addEventListener('DOMContentLoaded', function() {
    
    const app = (function() {
        return {
            refreshAtTopOfPage = () => {
                if (history.scrollRestoration) {
                    window.addEventListener('beforeunload', () => {
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                    });
                } else {
                    history.scrollRestoration = "manual"
                }
            }
        }
    })();
    app.refreshAtTopOfPage();

    
}, false);