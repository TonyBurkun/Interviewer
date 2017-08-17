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
    By loginButton = By.xpath("//*[@id=\"login-form\"]/div[3]/button");
    By forgotPasswordButton = By.xpath("//*[@id=\"login-form\"]/div[4]/a");
    By dontHaveAccountButton = By.xpath("//*[@id=\"login-form\"]/div[5]/p");
    By termsLink = By.xpath("//*[@id=\"root\"]/div/div/div/div/ul/li[2]/a");
    By helpCenterLink = By.xpath("//*[@id=\"root\"]/div/div/div/div/ul/li[3]/a");


    public LoginPage typeEmailAdress(String email) {
        driver.findElement(emailAdressField).sendKeys(email);
        return this;
    }

    public LoginPage typePassword(String password) {
        driver.findElement(passwordField).sendKeys(password);
        return this;
    }
    public LoginPage open() {
        driver.get("https://dev-interviewer.herokuapp.com/login");
        return this;
    }



}

