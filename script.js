const dateArray = [
  '25-Apr-2024', '02-May-2024', '09-May-2024', '31-May-2024', '21-Jun-2024'
];

const strategyArray = [
  {
    View: 'Bullish',
    Value: {
      '24-Apr-2024': ['Bull Call Spread','Bull Put Spread','Bull Put Spread','Long Call','Bull Put Spread','Bull Call Spread','Strategy1','Bull Call Spread','Strategy1','Strategy1','SpreadStrategy','Bull Call Spread'],
      '02-May-2024': ['Bull Call Spread','Bull Call Spread','Bull Put Spread','Long Call','Long Call','Long Call','Bull Put Spread','Bull Call Spread','Strategy1','Bull Call Spread','Strategy2','Strategy1','Strategy2','Bull Call Spread'],
      '09-May-2024': ['Strategy Put','Strategy Call','Strategy Call','Strategy Call','Strategy Call','Strategy Put']
    }
  },
  {
    View: 'Bearish',
    Value: {
      '25-Apr-2024': [
        'Long Put',
        'Bear Put Spread', 'Bear Put Spread', 'Bear Put Spread', 'Bear Put Spread', 'Bear Put Spread', 'Bear Put Spread', 'Bear Put Spread', 'Bear Put Spread',
        'Bear Call Spread', 'Bear Call Spread', 'Bear Call Spread', 'Bear Call Spread', 'Bear Call Spread', 'Bear Call Spread', 'Bear Call Spread'
      ],
      '31-May-2024': ['Long Put','Long Put','Long Put','Long Put'],
      '21-Jun-2024': ['Strategy3','Bear Put Spread','Strategy3','Long Put','Long Put']
    }
  },
  {
    View: 'RangeBound',
    Value: {
      '24-Apr-2024': ['Short Straddle','Short Strangle','Short Strangle','Iron Butterfly','Short Strangle','Short Straddle','Strategy1','Short Straddle','Strategy1','Strategy1','SpreadStrategy','Short Straddle'],
      '02-May-2024': ['Short Straddle','Short Straddle','Short Straddle','Iron Butterfly','Iron Butterfly','Short Strangle','Short Straddle','Strategy1','Short Straddle','Strategy2','Strategy2','Short Straddle'],
      '21-Jun-2024': ['Iron Condor','Iron Butterfly','Iron Butterfly','Iron Condor']
    }
  },
  {
    View: 'Volatile',
    Value: {
      '02-May-2024': ['Long Straddle','Long Strangle','Long Strangle','Long Strangle','Long Straddle','Strategy1','Strategy1','Spread-Strategy','Long Straddle'],
      '09-May-2024': ['Long Straddle','Long Straddle','Long Straddle','Long Strangle','Long Straddle','Strategy1','Long Straddle','Strategy2','Strategy2','Long Straddle'],
      '31-May-2024': ['Long Straddle','Long Strangle','Long Strangle','Long Strangle','Long Straddle']
    }
  }
];

// Initial view and date
let selectedView = 'Bearish';
let selectedDate = '25-Apr-2024';

// DOM elements
const dropdown = document.getElementById('dateDropdown');
const dropdownOptions = document.getElementById('dateOptions');
const selectedDateText = document.getElementById('selectedDate');
const strategyContainer = document.getElementById('strategyContainer');

// Format date for display (e.g., "25 Apr 2024")
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).replace(/-/g, ' ');
}

// Populate dropdown with dates
dateArray.forEach(date => {
  const option = document.createElement('div');
  option.textContent = formatDate(date);
  option.classList.add('dropdown-option');
  option.addEventListener('click', () => {
    selectedDate = date;
    selectedDateText.textContent = formatDate(date);
    dropdown.classList.remove('open');
    renderStrategies();
  });
  dropdownOptions.appendChild(option);
});

// Toggle dropdown open/close
dropdown.querySelector('.dropdown-selected').addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the click from bubbling up to the document
  dropdown.classList.toggle('open');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});

// Render strategies
function renderStrategies() {
  strategyContainer.innerHTML = '';
  const viewObj = strategyArray.find(item => item.View === selectedView);
  const dataForDate = viewObj?.Value[selectedDate] || [];

  if (dataForDate.length === 0) {
    strategyContainer.innerHTML = `
      <div class="empty-state">
        There are no strategies for <br/><strong>${formatDate(selectedDate)}</strong>
      </div>
    `;
    return;
  }

  const countMap = {};
  dataForDate.forEach(name => {
    countMap[name] = (countMap[name] || 0) + 1;
  });

  const strategyOrder = ['Long Put', 'Bear Put Spread', 'Bear Call Spread'];
  strategyOrder.forEach(name => {
    const count = countMap[name] || 0;
    if (count > 0) {
      const strategy = document.createElement('div');
      strategy.className = 'strategy';
      strategy.innerHTML = `
        <span class="strategy-name">${name}</span>
        <span class="strategy-count">• ${count} ${count === 1 ? 'Strategy' : 'Strategies'}</span>
      `;
      strategyContainer.appendChild(strategy);
    }
  });
}

// Handle view change
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedView = btn.getAttribute('data-view');
    renderStrategies();
  });
});

// Initial render
selectedDateText.textContent = formatDate(selectedDate);
renderStrategies();