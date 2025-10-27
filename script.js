* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

header {
    text-align: center;
    color: white;
    margin-bottom: 30px;
}

header h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

header p {
    font-size: 1.1em;
    opacity: 0.9;
}

.main-content {
    display: grid;
    gap: 20px;
}

.card-form {
    background: white;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.card-form h2 {
    margin-bottom: 20px;
    color: #333;
}

.form-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    margin-bottom: 15px;
}

.form-group:last-child {
    grid-template-columns: 1fr 1fr 1fr;
}

input, select, button {
    padding: 12px;
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    font-size: 16px;
}

input:focus, select:focus {
    outline: none;
    border-color: #667eea;
}

button {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.2s;
}

button:hover {
    transform: translateY(-2px);
}

.stats-overview {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.stat-card {
    background: white;
    padding: 25px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.stat-card h3 {
    color: #666;
    font-size: 0.9em;
    margin-bottom: 10px;
    text-transform: uppercase;
}

.stat-card span {
    font-size: 2em;
    font-weight: bold;
    color: #333;
}

.period-nav {
    background: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.period-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 10px;
}

.period-btn {
    padding: 10px 20px;
    background: #f8f9fa;
    border: 2px solid #e9ecef;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s;
}

.period-btn.active {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border-color: #667eea;
}

.charts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.chart-container {
    background: white;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    height: 300px;
}

.cards-list {
    background: white;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.cards-grid {
    display: grid;
    gap: 15px;
    margin-top: 20px;
}

.card-item {
    border: 2px solid #e9ecef;
    border-radius: 10px;
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    gap: 15px;
    align-items: center;
    transition: all 0.3s;
}

.card-item:hover {
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
}

.card-name {
    font-weight: bold;
    color: #333;
}

.card-price {
    text-align: center;
}

.profit-positive {
    color: #28a745;
    font-weight: bold;
}

.profit-negative {
    color: #dc3545;
    font-weight: bold;
}

.period-badge {
    background: #667eea;
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.8em;
}

.delete-btn {
    background: #dc3545;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .form-group {
        grid-template-columns: 1fr;
    }
    
    .stats-overview {
        grid-template-columns: 1fr;
    }
    
    .charts {
        grid-template-columns: 1fr;
    }
    
    .card-item {
        grid-template-columns: 1fr;
        text-align: center;
    }
}
