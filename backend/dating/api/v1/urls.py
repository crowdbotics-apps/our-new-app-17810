from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    DislikeViewSet,
    InboxViewSet,
    LikeViewSet,
    MatchViewSet,
    ProfileViewSet,
    SettingViewSet,
    UserPhotoViewSet,
)

router = DefaultRouter()
router.register("match", MatchViewSet)
router.register("userphoto", UserPhotoViewSet)
router.register("profile", ProfileViewSet)
router.register("dislike", DislikeViewSet)
router.register("inbox", InboxViewSet)
router.register("like", LikeViewSet)
router.register("setting", SettingViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
