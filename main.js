function initMap(){


    // Location Marker

    const markers = [
        {
            locationName: '未央咖啡店',
            lat: 25.026265083472012,
            lng: 121.54742066494451,
            address: '台北市大安區四維路208巷10號',
            songlink: 'https://open.spotify.com/embed/track/1rMEkT856LkjGIHQSGYQxX?utm_source=generator',
            rating: 4.1,
            mapLink: 'https://maps.app.goo.gl/yvZxYAqW7mRhSzdB6',
            favSong: 'Always',
            favArtist: 'Daniel Caesar',
            favAlbum: 'Never Enough'
        },
        {
            locationName: 'The Folks',
            lat: 25.026631720133487,
            lng: 121.54764775745996,
            address: '台北市大安區四維路208巷3-1號',
            songlink: 'https://open.spotify.com/embed/playlist/2CrpJAhS6FDykvGEzUYyeg?utm_source=generator',
            rating: 4.7,
            mapLink: 'https://maps.app.goo.gl/ZnkKwjTSHTpY3MQFA',
            favSong: 'Happy',
            favArtist: 'Pharrell Williams',
            favAlbum: 'G I R L'
        },
        {
            locationName: '翌日咖啡店',
            lat: 25.02832157891815,
            lng: 121.52983143188784,
            address: '台北市大安區潮州街176號',
            songlink: 'https://open.spotify.com/embed/artist/5schNIzWdI9gJ1QRK8SBnc?utm_source=generator',
            rating: 4.6,
            mapLink: 'https://maps.app.goo.gl/K68VTXQN65pEpgS49',
            favSong: 'Shape of You',
            favArtist: 'Ed Sheeran',
            favAlbum: '÷'
        },
        {
            locationName: '北風社',
            lat: 25.05534065103022,
            lng: 121.52020334125248,
            address: '台北市大同區赤峰街47巷18號2樓',
            songlink: 'https://open.spotify.com/embed/album/6V4aP2jvCLc1McVX6HPmdo?utm_source=generator',
            rating: 4.2,
            mapLink: 'https://maps.app.goo.gl/LaDRTY1XMU7wCWFv8',
            favSong: 'Bad Guy',
            favArtist: 'Billie Eilish',
            favAlbum: 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?'
        },
        {
            locationName: '桃五咖啡',
            lat: 25.030004824279,
            lng: 121.54032547988488,
            address: '台北市大安區瑞安街208巷56號1樓',
            songlink: 'https://open.spotify.com/embed/album/0qGQrHicD7qXuz5VMlDuCe?utm_source=generator',
            rating: 4.6,
            mapLink: 'https://maps.app.goo.gl/VJaM7dVNQBU6WMRx8',
            favSong: 'Blinding Lights',
            favArtist: 'The Weeknd',
            favAlbum: 'After Hours'
        }
    ]

    // 設定地圖中心
    
    const centerMap = {lat:25.0525837, lng:121.5313012}

    // 設定地圖樣式

    const mapOptions = {
        center: centerMap,
        zoom: 10.2,
        disableDefaultUI: true,
        styles:[
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ]
        
    }

    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions)

    // 設定marker Icon
    const fehMarker = {
        url : "https://www.freeiconspng.com/uploads/black-music-icon-26.png",
        scaledSize: new google.maps.Size(30, 30)
    }

    // 設定視窗邊界
    const bounds = new google.maps.LatLngBounds();

    // 點選Icon時顯示資訊視窗大小
    const infoWindow = new google.maps.InfoWindow({
        minWidth: 220,
        maxWidth: 220,
        pixelOffset: new google.maps.Size(0, -30) // 向上移動 30 像素
    });

    let currentInfoWindow = null; // 用於跟踪當前打開的 InfoWindow

    // 迴圈循環markers，得到每個點位的資訊
    for (let i = 0; i < markers.length; i++) {
        const marker = new google.maps.Marker({
            position: { lat: markers[i]['lat'], lng: markers[i]['lng'] },
            map: map,
            icon: fehMarker,
        });

        createInfoWindows(marker, i);

        bounds.extend(new google.maps.LatLng(markers[i]['lat'], markers[i]['lng']));
    }

    map.fitBounds(bounds);

    // openModal 函數
    window.openModal = function(index) {
        const modal = document.getElementById('myModal');
        const modalContent = modal.querySelector('.modal-content');
        
        const ratingHtml = markers[index].rating ? `<span class="rating">${markers[index].rating.toFixed(1)} ⭐</span>` : '';
        
        // 更新 Modal 內容
        modalContent.innerHTML = `
            <div class="modal-header">
                <div class="title-rating">
                    <h5 class="modal-title">
                        <a href="${markers[index]['mapLink']}" target="_blank" rel="noopener noreferrer">${markers[index]['locationName']}</a>
                    </h5>
                    ${ratingHtml}
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <address>
                    <p>地址：${markers[index]['address']}</p>
                </address>
                <div class="favorites">
                    <p><i>最愛歌曲</i>：${markers[index]['favSong']}</p>
                    <p><i>最愛歌手</i>：${markers[index]['favArtist']}</p>
                    <p><i>最愛專輯</i>：${markers[index]['favAlbum']}</p>
                </div>
                <iframe id="spotify-iframe" style="border-radius:12px" src="${markers[index]['songlink']}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        `;

        // 使用 Bootstrap 的 JS API 開啟 Modal
        var myModal = new bootstrap.Modal(modal, {});
        myModal.show();

        // 獲取 iframe 元素
        const iframe = document.getElementById('spotify-iframe');

        // 添加 Modal 關閉事件監聽器
        modal.addEventListener('hidden.bs.modal', function () {
            if (iframe) {
                iframe.contentWindow.postMessage('{"command":"pause"}', '*');
                iframe.src = iframe.src;
            }
        });

        // 將地圖居中到找到的位置
        const markerPosition = new google.maps.LatLng(markers[index]['lat'], markers[index]['lng']);
        map.panTo(markerPosition);
        map.setZoom(15); // 可以根據需要調整縮放級別
    }

    // 添加隨機咖啡店按鈕的功能
    document.getElementById('randomCafeBtn').addEventListener('click', function() {

        if (currentInfoWindow) {
            currentInfoWindow.close();
        }

        this.classList.add('active');
        
        const randomIndex = Math.floor(Math.random() * markers.length);
        openModal(randomIndex);
        
        const markerPosition = new google.maps.LatLng(markers[randomIndex]['lat'], markers[randomIndex]['lng']);
        map.panTo(markerPosition);
        
        setTimeout(() => {
            map.setZoom(15);
            this.classList.remove('active');
        }, 1000);
    });

    function createInfoWindows(marker, i) {
        const ratingHtml = markers[i].rating ? `<span class="rating">${markers[i].rating.toFixed(1)} ⭐</span>` : '';
        const infoWindowContent = `
            <div class="feh-content dark-theme">
                <div class="title-rating">
                    <h5>
                        <a href="${markers[i]['mapLink']}" target="_blank" rel="noopener noreferrer">${markers[i]['locationName']}</a>
                    </h5>
                    ${ratingHtml}
                </div>
                <address>
                    <p>${markers[i]['address']}</p>
                </address>
                <div class="favorites">
                    <p><i>最愛歌曲</i>：${markers[i]['favSong']}</p>
                    <p><i>最愛歌手</i>：${markers[i]['favArtist']}</p>
                    <p><i>最愛專輯</i>：${markers[i]['favAlbum']}</p>
                </div>
                <button class="details-button" onclick="openModal(${i})">Details</button>
            </div>
        `;

        const infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent,
            maxWidth: 220,
            minWidth: 220,
            pixelOffset: new google.maps.Size(0, -30)
        });

        google.maps.event.addListener(marker, 'click', function () {
            // 如果有其他打開的 InfoWindow，先關閉它
            if (currentInfoWindow) {
                currentInfoWindow.close();
            }
            
            infoWindow.open(map, marker);
            currentInfoWindow = infoWindow; // 更新當前打開的 InfoWindow
            
            const markerPosition = new google.maps.LatLng(markers[i]['lat'], markers[i]['lng']);
            map.panTo(markerPosition);
        });

        // 當地圖被點擊時關閉 InfoWindow
        google.maps.event.addListener(map, 'click', function() {
            infoWindow.close();
            currentInfoWindow = null;
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        const searchContainer = document.getElementById('search-container');
        const searchIcon = document.getElementById('search-icon');
        const searchBox = document.getElementById('search-box');
        const searchInput = document.getElementById('search-input');
        const searchSubmit = document.getElementById('search-submit');

        if (!searchContainer || !searchIcon || !searchBox || !searchInput || !searchSubmit) {
            console.error('無法找到搜索相關的DOM元素');
            return;
        }

        searchIcon.addEventListener('click', function() {
            console.log('搜索圖標被點擊');
            searchBox.style.display = searchBox.style.display === 'none' ? 'block' : 'none';
        });

        // 使用事件委派
        searchContainer.addEventListener('click', function(event) {
            if (event.target === searchSubmit || (event.target.parentElement === searchSubmit)) {
                performSearch();
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        function performSearch() {
            console.log('執行搜索');
            const searchTerm = searchInput.value.toLowerCase().trim();
            const foundIndex = markers.findIndex(function(marker) {
                return marker.locationName.toLowerCase().includes(searchTerm);
            });

            if (foundIndex !== -1) {
                console.log('找到匹配的位置:', markers[foundIndex].locationName);
                openModal(foundIndex);
                searchBox.style.display = 'none';
                searchInput.value = '';
            } else {
                console.log('找不到匹配的位置');
                alert('找不到符合的店名');
            }
        }
    });

}