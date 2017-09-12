package ui;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {

    private final WebDriver driver;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    By emailAdressField = By.id("username");
    By passwordField = By.id("password");
    By loginButton = By.id("loginSubmit");
    By forgotPasswordButton = By.id("forgotPassBtn");
    By dontHaveAccountButton = By.id("noAccount");
    By termsLink = By.id("termsService");
    By helpCenterLink = By.id("helpCenter");
    By closeButtonForDontHaveAccount = By.xpath("/html/body/div[2]/div/div[2]/div/div/div[1]/button/span[1]");
    By loginLink = By.linkText("Log in");


    public LoginPage clickLoginLink() {
        driver.findElement(loginLink).click();
        return this;
    }
    public LoginPage clickCloseButtonForDontHaveAccount() {
        driver.findElement(closeButtonForDontHaveAccount).click();
        return this;
    }
    public LoginPage clicktermsLink() {
        driver.findElement(termsLink).click();
        return this;
    }
    public LoginPage clickhelpCenterLink() {
        driver.findElement(helpCenterLink).click();
        return this;
    }
    public LoginPage clickdontHaveAccountButton  () {
        driver.findElement(dontHaveAccountButton ).click();
        return this;
    }
    public LoginPage clickforgotPasswordButton () {
        driver.findElement(forgotPasswordButton).click();
        return this;
    }
    public LoginPage clickLoginButton () {
        driver.findElement(loginButton).click();
        return this;
    }

    public LoginPage typeEmailAdress(String email) {
        driver.findElement(emailAdressField).sendKeys(email);
        return this;
    }

    public LoginPage typePassword(String password) {
        driver.findElement(passwordField).sendKeys(password);
        return this;
    }
    public LoginPage open() {
        driver.get("https://qa-interviewer.herokuapp.com");
        return this;
    }



}

