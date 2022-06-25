<template>
  <div class="vertical-center">
    <div class="content">
      <div class="md-layout">
        <div class="md-layout-item md-size-50">
          <md-card class="md-elevation-3">
            <md-card-content>
              <form>
                <h3>Forgot Password</h3>

                <div class="form-group">
                  <label>Email address</label>
                  <input type="email" class="form-control form-control-lg" />
                </div>

                <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button>
              </form>
            </md-card-content>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
