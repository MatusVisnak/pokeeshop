<template>
  <transition-group name="toast" tag="div" class="toast-container">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="['toast', `toast-${toast.type}`]"
    >
      <div class="toast-icon">{{ getIcon(toast.type) }}</div>
      <div class="toast-content">
        <p class="toast-message">{{ toast.message }}</p>
      </div>
      <button @click="removeToast(toast.id)" class="toast-close">×</button>
    </div>
  </transition-group>
</template>

<script>
export default {
  name: 'ToastNotification',

  data() {
    return {
      toasts: []
    }
  },

  methods: {
    show(message, type = 'success', duration = 3000) {
      const id = Date.now()
      this.toasts.push({ id, message, type })

      setTimeout(() => {
        this.removeToast(id)
      }, duration)
    },

    removeToast(id) {
      const index = this.toasts.findIndex(t => t.id === id)
      if (index > -1) {
        this.toasts.splice(index, 1)
      }
    },

    getIcon(type) {
      const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
      }
      return icons[type] || '✅'
    }
  }
}
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 100px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.toast {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 300px;
  max-width: 400px;
  padding: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  border-left: 4px solid;
}

.toast-success {
  border-left-color: #27ae60;
}

.toast-error {
  border-left-color: #e74c3c;
}

.toast-warning {
  border-left-color: #f39c12;
}

.toast-info {
  border-left-color: #3498db;
}

.toast-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.toast-content {
  flex: 1;
}

.toast-message {
  margin: 0;
  color: #2c3e50;
  font-weight: 500;
  line-height: 1.4;
}

.toast-close {
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #7f8c8d;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s;
  flex-shrink: 0;
}

.toast-close:hover {
  color: #2c3e50;
}

/* Animations */
.toast-enter-active {
  animation: slideIn 0.3s ease-out;
}

.toast-leave-active {
  animation: slideOut 0.3s ease-in;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(400px);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .toast-container {
    right: 10px;
    left: 10px;
  }

  .toast {
    min-width: auto;
  }
}
</style>