var data_btn = document.getElementById('valorant-agents')

data_btn.addEventListener("click", async function(){

    try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        const data = await response.json();

        let agents = data.data.map(function(x){
            return x.displayName
        });

        let display_container = document.getElementById("display-container");
        display_container.innerHTML = '';

        agents.map(async function(agent){
            
            try {
                
                // API for image of agents (Unsplash)(200)(Unsplash has no valorant images) :(

                /*
                const API = `https://api.unsplash.com/search/photos?page=1&query=${agent}&client_id=d2RD71XatIHcuwuZtT61ukDHZ8Ly8_yA3-n0C0yCVsg`

                const imageResponse = await fetch(API);
                const imageData = await imageResponse.json();
                const imageUrl = imageData.results[0].urls.raw
                let agent_img = document.createElement('div')
                agent_img.innerHTML = `<img src=${imageUrl}>`
                display_container.appendChild(agent_img)
                */

                let agent_div = document.createElement('div')
        
                agent_div.innerHTML = agent
                display_container.appendChild(agent_div);
                
    
            } catch (error) {
                console.log('Error:', error);
            }
        });
            
    } catch (error) {
        console.log('Error:', error);
    }
});

